import { useState } from "react";

export const useStepper = () => {
  const descriptions = [
    "This is the part of the process we need your name",
    "This is the part of the process we need your email",
    "This is the part of the process we need your password",
  ];
  const steps = ["Enter your name", "Enter your email", "Enter your password"];
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState<Record<string, boolean>>({
    "0": false,
    "1": false,
    "2": false,
  });

  const handleComplete = () =>
    setCompleted((prev) => ({ ...prev, [active]: true }));
  const handleCancelComplete = () =>
    setCompleted((prev) => ({ ...prev, [active]: false }));
  const handleNext = () =>
    setActive((prev) => (prev === steps.length ? prev : prev + 1));
  const handlePrevious = () =>
    setActive((prev) => (prev === 0 ? prev : prev - 1));
  return {
    descriptions,
    active,
    handleNext,
    handlePrevious,
    steps,
    handleCancelComplete,
    handleComplete,
    completed,
    setCompleted,
    setActive,
  };
};
