/*
  Warnings:

  - You are about to drop the column `fileType` on the `File` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "fileType",
ADD COLUMN     "fileExt" TEXT NOT NULL DEFAULT E'';
