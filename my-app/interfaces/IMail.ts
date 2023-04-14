import { IFile } from "./IFile";

export interface IMail {
    id: number; // 메일 고유 id
    important: boolean; // 중요메일 여부
    read: boolean; // 읽음 여부
    fileList: IFile[]; // 메일에 첨부된 파일 리스트
    subject: string; // 메일제목
    cc: string[]; // 참조
    bcc: string[]; // 숨은참조
    sender: string; // 발송인
    receiver: string; // 수신인
    sendDate: Date; // 발송일
}