export type Worker = {
    readonly id: number;
    readonly hint: string;
    readonly isCanceled: boolean;
    readonly isFinished: boolean;
    cancel(error: Error, restartAfter?: Worker | null): void;
    whenFinished(): Promise<void>;
};
