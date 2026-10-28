
import { useState } from "react";
import { useSelector } from "react-redux";

import TextField from "../common/TextField";
import CustomerTypeTabs from "./CustomerTypeTabs";
import DeliveryOptionCard from "./DeliveryOptionCard";
import FormSection from "./FormSection";
import LegalFormSelect from "./LegalFormSelect";
import NearbyStoreBanner from "./NearbyStoreBanner";
import OrderSummary from "./OrderSummary";
import PaymentOptionRow from "./PaymentOptionRow";
import PickupAddressSection from "./PickupAddressSection";

import {
  deliveryMethods,
  nearbyStoreOffer,
  paymentMethods,
  pickupStores,
} from "../../data/checkout/checkoutData";

import { useCheckoutForm } from "../../hooks/useCheckoutForm";
import { usePromoCode } from "../../hooks/usePromoCode";
import { formatPhone, isValidPhone } from "../../utils/format";

import type { RootState } from "../../store/store";

function Checkout() {
  const [bannerDismissed, setBannerDismissed] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const itemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const promo = usePromoCode("SPRING2021");

  const discount = Math.round((subtotal * promo.percent) / 100);

  const {
    values,
    errors,
    setField,
    setCustomerType,
    handleSubmit,
  } = useCheckoutForm((order) => {
    console.log("Order submitted:", {
      ...order,
      items: cartItems,
      itemsCount,
      subtotal,
      discount,
      deliveryCost: delivery.cost,
      total,
    });
  });

  const isLegal = values.customerType === "legal";

  const delivery =
    deliveryMethods.find((method) => method.id === values.deliveryMethod) ??
    deliveryMethods[0];

  const availablePayments = paymentMethods.filter((method) =>
    method.availableFor.includes(values.customerType)
  );

  const total = subtotal - discount + delivery.cost;

  const phoneField = (
    <TextField
      label="Phone"
      required
      type="tel"
      inputMode="tel"
      autoComplete="tel"
      value={values.phone}
      onValueChange={(value) => setField("phone", formatPhone(value))}
      valid={isValidPhone(values.phone)}
      error={errors.phone}
    />
  );

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto w-full max-w-[1420px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-gray-200 bg-white px-5 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Your cart is empty
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Add some products to your cart before proceeding to checkout.
          </p>

          <a
            href="/"
            className="mt-6 inline-flex rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Continue shopping
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-[1420px] flex-1 px-4 py-5 sm:px-6 lg:px-8">
      <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-4 grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_320px]"
      >
        <div className="space-y-3 sm:space-y-4">
          {!bannerDismissed && (
            <NearbyStoreBanner
              priceFrom={nearbyStoreOffer.priceFrom}
              distanceMeters={nearbyStoreOffer.distanceMeters}
              onAccept={() => {
                setField("deliveryMethod", "store-pickup");
                setBannerDismissed(true);
              }}
              onDismiss={() => setBannerDismissed(true)}
            />
          )}

          <FormSection>
            <CustomerTypeTabs
              value={values.customerType}
              onChange={setCustomerType}
            />
          </FormSection>

          <FormSection title="Recipient details">
            <div className="space-y-3 lg:max-w-[420px]">
              {isLegal ? (
                <>
                  <LegalFormSelect
                    value={values.legalForm}
                    onChange={(value) => setField("legalForm", value)}
                  />

                  <TextField
                    label="Company name"
                    required
                    value={values.companyName}
                    onValueChange={(value) => setField("companyName", value)}
                    error={errors.companyName}
                    autoComplete="organization"
                  />

                  <TextField
                    label="Tax ID (INN)"
                    required
                    inputMode="numeric"
                    value={values.taxId}
                    onValueChange={(value) =>
                      setField("taxId", value.replace(/\D/g, "").slice(0, 12))
                    }
                    error={errors.taxId}
                  />

                  {values.legalForm === "llc" && (
                    <TextField
                      label="KPP"
                      required
                      inputMode="numeric"
                      value={values.kpp}
                      onValueChange={(value) =>
                        setField("kpp", value.replace(/\D/g, "").slice(0, 9))
                      }
                      error={errors.kpp}
                    />
                  )}

                  {phoneField}

                  <TextField
                    label="Legal address"
                    required
                    value={values.legalAddress}
                    onValueChange={(value) => setField("legalAddress", value)}
                    error={errors.legalAddress}
                    autoComplete="street-address"
                  />
                </>
              ) : (
                <>
                  <TextField
                    label="Full name"
                    required
                    value={values.fullName}
                    onValueChange={(value) => setField("fullName", value)}
                    error={errors.fullName}
                    autoComplete="name"
                  />

                  {phoneField}

                  <TextField
                    label="Email"
                    required
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onValueChange={(value) => setField("email", value)}
                    error={errors.email}
                  />
                </>
              )}
            </div>
          </FormSection>

          <FormSection title="Delivery method">
            <div
              role="radiogroup"
              aria-label="Delivery method"
              className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
            >
              {deliveryMethods.map((method) => (
                <DeliveryOptionCard
                  key={method.id}
                  name="deliveryMethod"
                  method={method}
                  selected={values.deliveryMethod === method.id}
                  onSelect={() => setField("deliveryMethod", method.id)}
                />
              ))}
            </div>
          </FormSection>

          {values.deliveryMethod === "store-pickup" && (
            <PickupAddressSection
              stores={pickupStores}
              selectedId={values.pickupStoreId}
              onSelect={(id) => setField("pickupStoreId", id)}
            />
          )}

          {values.deliveryMethod === "courier" && (
            <FormSection title="Recipient address">
              <div className="space-y-3 lg:max-w-[420px]">
                <TextField
                  label="City"
                  required
                  value={values.city}
                  onValueChange={(value) => setField("city", value)}
                  error={errors.city}
                  autoComplete="address-level2"
                />

                <TextField
                  label="Street"
                  required
                  value={values.street}
                  onValueChange={(value) => setField("street", value)}
                  error={errors.street}
                  autoComplete="address-line1"
                />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <TextField
                    label="House"
                    required
                    value={values.house}
                    onValueChange={(value) => setField("house", value)}
                    error={errors.house}
                  />

                  <TextField
                    label="Building"
                    value={values.building}
                    onValueChange={(value) => setField("building", value)}
                  />

                  <TextField
                    label="Apartment"
                    value={values.apartment}
                    onValueChange={(value) => setField("apartment", value)}
                  />
                </div>

                <TextField
                  label="Delivery comment"
                  value={values.comment}
                  onValueChange={(value) => setField("comment", value)}
                />
              </div>
            </FormSection>
          )}

          <FormSection title="Payment method">
            <div
              role="radiogroup"
              aria-label="Payment method"
              className="space-y-2 lg:max-w-[420px]"
            >
              {availablePayments.map((method) => (
                <PaymentOptionRow
                  key={method.id}
                  name="paymentMethod"
                  method={method}
                  selected={values.paymentMethod === method.id}
                  onSelect={() => setField("paymentMethod", method.id)}
                />
              ))}
            </div>
          </FormSection>
        </div>

        <aside className="min-w-0 lg:sticky lg:top-4">
          <OrderSummary
            itemsCount={itemsCount}
            deliveryCost={delivery.cost}
            discount={discount}
            total={total}
            promoCode={promo.code}
            promoError={promo.error}
            promoPercent={promo.percent}
            onPromoChange={promo.changeCode}
            onPromoApply={promo.apply}
          />

          <div className="mt-4 rounded-md border border-gray-200 bg-white p-4">
            <h2 className="mb-3 text-sm font-semibold text-gray-900">
              Products in your order ({cartItems.length})
            </h2>

            <div className="space-y-3">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-start gap-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-14 w-14 shrink-0 rounded-md border border-gray-100 object-contain"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-medium text-gray-800">
                      {product.title}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Qty: {quantity}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      ₹{(product.price * quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </form>
    </main>
  );
}

export default Checkout;