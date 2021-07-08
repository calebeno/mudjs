export function mudMessage(priority: MUDMessagePriority, message?: string): void {
    if (priority === MUDMessagePriority.info) {
        message = `MUDJS: ${message}`;
        console.log(message);
    } else if (priority === MUDMessagePriority.warning) {
        message = `MUDJS: ${message}`;
        console.warn(message);
    } else if (priority === MUDMessagePriority.error) {
        message = `MUDJS: ${message || 'Error in MUDJS'}`;
        console.error(message);
    }
}

export enum MUDMessagePriority {
    info = 'info',
    warning = 'warning',
    error = 'error'
}
