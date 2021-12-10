/*
  Warnings:

  - You are about to drop the column `path` on the `File` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "path",
ADD COLUMN     "dataSyncDate" TIMESTAMP(3),
ADD COLUMN     "dataSyncStatus" BOOLEAN NOT NULL DEFAULT false;
