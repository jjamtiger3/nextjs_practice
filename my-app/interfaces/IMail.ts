import { IFile } from "./IFile";

export interface IMail {
    id: number;
    important: boolean;
    read: boolean;
    fileList: IFile[];
    subject: string;
    cc: string[];
    bcc: string[];
    sender: string;
    receiver: string;
    sendDate: Date;
}