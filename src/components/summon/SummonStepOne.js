import React, { useState } from 'react';

import { daoPresets } from '../../content/summon-presets';
import PresetCard from './PresetCard';

import './Summon.scss';

const SummonStepOne = ({ daoData, setDaoData, setCurrentStep }) => {
  const selectPreset = preset => {
    setDaoData(prevState => {
      return { ...prevState, ...preset };
    });
  };

  const renderPresets = () => {
    return daoPresets.map(preset => {
      const isSelected = daoData.presetName === preset.presetName;
      return (
        <PresetCard
          preset={preset}
          isSelected={isSelected}
          onClick={() => selectPreset(preset)}
          key={preset.presetName}
        ></PresetCard>
      );
    });
  };
  return (
    <div className="SummonStepOne">
      <div className="SummonStepOne__list">{renderPresets()}</div>
      <button
        onClick={() => setCurrentStep(2)}
        disabled={!daoData.presetName}
        className={!daoData.presetName ? 'disabled' : ''}
      >
        NEXT STEP
      </button>
    </div>
  );
};

export default SummonStepOne;
