/*
  Warnings:

  - You are about to drop the column `status` on the `File` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Data" ADD COLUMN     "statusId" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "File" DROP COLUMN "status";

-- CreateTable
CREATE TABLE "callStatus" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "callStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "callStatus_title_key" ON "callStatus"("title");

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "callStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
