/*
  Warnings:

  - You are about to drop the column `dataSyncError` on the `File` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "dataSyncError",
ADD COLUMN     "dataSyncResult" TEXT DEFAULT E'',
ADD COLUMN     "filePath" TEXT NOT NULL DEFAULT E'';
