import { Request } from 'express';

export const fileNamer = (
  req: Request,
  file: Express.Multer.File,
  callback: (error: Error | null, filename: string) => void,
) => {
  if (!file) return callback(new Error('File is empty'), '');

  const fileExtension = file.mimetype.split('/')[1];

  const fileName = `${crypto.randomUUID()}.${fileExtension}`;

  callback(null, fileName);
};
