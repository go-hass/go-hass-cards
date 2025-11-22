export interface SwipeGestureResult {
    velocity: number;
    delta: number;
    isSwipe: boolean;
    isDownwardSwipe: boolean;
}
export interface SwipeGestureConfig {
    velocitySwipeThreshold?: number;
    movementTimeThreshold?: number;
}
/**
 * Recognizes swipe gestures and calculates velocity for touch interactions.
 * Tracks touch movement and provides velocity-based and position-based gesture detection.
 */
export declare class SwipeGestureRecognizer {
    private _startY;
    private _delta;
    private _startTime;
    private _lastY;
    private _lastTime;
    private _velocityThreshold;
    private _movementTimeThreshold;
    constructor(config?: SwipeGestureConfig);
    /**
     * Initialize gesture tracking with starting touch position
     */
    start(clientY: number): void;
    /**
     * Update gesture state during movement
     * Returns the current delta (negative when dragging down)
     */
    move(clientY: number): number;
    /**
     * Calculate final gesture result when touch ends
     */
    end(): SwipeGestureResult;
    /**
     * Get current drag delta (negative when dragging down)
     */
    getDelta(): number;
    /**
     * Calculate velocity based on recent movement
     * Returns 0 if no recent movement detected
     * Positive velocity means downward swipe
     */
    getVelocity(): number;
    /**
     * Reset all tracking state
     */
    reset(): void;
}
