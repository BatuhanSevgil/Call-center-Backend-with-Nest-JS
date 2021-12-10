/*
  Warnings:

  - Added the required column `name` to the `Data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Data" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ALTER COLUMN "statusId" SET DEFAULT 1;

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataStatusHistory" (
    "id" SERIAL NOT NULL,
    "dataId" INTEGER,
    "changePersonId" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(6),

    CONSTRAINT "DataStatusHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");

-- AddForeignKey
ALTER TABLE "DataStatusHistory" ADD CONSTRAINT "DataStatusHistory_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataStatusHistory" ADD CONSTRAINT "DataStatusHistory_changePersonId_fkey" FOREIGN KEY ("changePersonId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;
