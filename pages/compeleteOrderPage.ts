import { Locator, Page , expect} from '@playwright/test';
import { HomePage } from './HomePage';



export class CheckoutOverviewPage extends HomePage {
  readonly cartItems: Locator;
  readonly subtotalLabel: Locator;
  readonly taxLabel: Locator;
  readonly totalLabel: Locator;
    readonly finishBtn : Locator;
    readonly successMessage : Locator

  constructor(page: Page) {
     super(page);
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.subtotalLabel = page.locator('[data-test="subtotal-label"]');
    this.taxLabel = page.locator('[data-test="tax-label"]');
    this.totalLabel = page.locator('[data-test="total-label"]');
      this.finishBtn = page.locator("#finish");
      this.successMessage = page.locator(".complete-header");
  }

  private moneyToCents(value: string): number {
    return Math.round(Number(value.replace(/[^\d.]/g, '')) * 100);
  }

  async getItemsSubtotalInCents(): Promise<number> {
    let subtotal = 0;

    for (let index = 0; index < await this.cartItems.count(); index++) {
      const item = this.cartItems.nth(index);

      const priceText = await item
        .locator('[data-test="inventory-item-price"]')
        .innerText();

      const quantityText = await item
        .locator('[data-test="item-quantity"]')
        .innerText();

      const price = this.moneyToCents(priceText);
      const quantity = Number(quantityText);

      subtotal += price * quantity;
    }

    return subtotal;
  }

  async assertSubtotalMatchesItems(): Promise<void> {
    const calculatedSubtotal = await this.getItemsSubtotalInCents();

    const displayedSubtotal = this.moneyToCents(
      await this.subtotalLabel.innerText()
    );

    expect(displayedSubtotal).toBe(calculatedSubtotal);
    console.log(`Displayed subtotal: ${displayedSubtotal}, Calculated subtotal: ${calculatedSubtotal}`);
  }

  async assertTotalMatchesSubtotalAndTax(): Promise<void> {
    const subtotal = this.moneyToCents(await this.subtotalLabel.innerText());
    const tax = this.moneyToCents(await this.taxLabel.innerText());
    const displayedTotal = this.moneyToCents(await this.totalLabel.innerText());

    expect(displayedTotal).toBe(subtotal + tax);
    console.log(`Displayed total: ${displayedTotal}, Calculated total: ${subtotal + tax}`);
  }

  async completeOrder() :Promise<void>
{
    
      this.finishBtn.click();
}
}