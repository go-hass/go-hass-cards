export declare class AudioRecorder {
    private _active;
    private _callback;
    private _context;
    private _stream;
    private _source;
    private _recorder;
    constructor(callback: (data: Int16Array) => void);
    get active(): boolean;
    get sampleRate(): number;
    static get isSupported(): any;
    start(): Promise<void>;
    stop(): Promise<void>;
    close(): void;
    private _createContext;
}
