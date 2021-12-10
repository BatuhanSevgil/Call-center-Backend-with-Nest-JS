/*
  Warnings:

  - Added the required column `Phone` to the `Data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adress` to the `Data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Data" ADD COLUMN     "IP" TEXT,
ADD COLUMN     "Phone" TEXT NOT NULL,
ADD COLUMN     "adress" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "surname" TEXT NOT NULL;
