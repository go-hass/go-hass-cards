import "../onboarding/ha-onboarding";
declare global {
    interface Window {
        stepsPromise: Promise<Response>;
    }
}
