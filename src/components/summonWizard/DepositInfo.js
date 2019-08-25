import { Field, useFormikContext } from "formik";
import React from "react";

const DepositInfo = () => {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <h3>Deposit Info</h3>
      <h4>
        Members must post a deposit when submitting a proposal, and the
        processing reward goes to the processor.
      </h4>

      <Field name="proposalDeposit">
        {({ field, form }) => (
          <div className={field.value ? "Field HasValue" : "Field "}>
            <label>Proposal Deposit - ETH</label>
            <input
              min="0"
              type="number"
              inputMode="numeric"
              step="any"
              {...field}
            />
          </div>
        )}
      </Field>

      <small style={{ color: "red" }}>
        {touched.proposalDeposit && errors.proposalDeposit}
      </small>

      <Field name="processingReward">
        {({ field }) => (
          <div className={field.value ? "Field HasValue" : "Field "}>
            <label>Processing Reward - ETH</label>
            <input
              min="0"
              type="number"
              inputMode="numeric"
              step="any"
              {...field}
            />
          </div>
        )}
      </Field>

      <small style={{ color: "red" }}>
        {touched.processingReward && errors.processingReward}
      </small>
    </div>
  );
};

export default DepositInfo;
