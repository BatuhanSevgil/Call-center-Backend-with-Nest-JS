/*
  Warnings:

  - You are about to drop the column `IP` on the `Data` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `Data` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Data` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `Data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Data" DROP COLUMN "IP",
DROP COLUMN "Phone",
DROP COLUMN "description",
DROP COLUMN "surname",
ADD COLUMN     "info1" TEXT DEFAULT E'',
ADD COLUMN     "info2" TEXT DEFAULT E'',
ADD COLUMN     "info3" TEXT DEFAULT E'',
ADD COLUMN     "ip" TEXT DEFAULT E'',
ALTER COLUMN "adress" SET DEFAULT E'',
ALTER COLUMN "email" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "File" ADD COLUMN     "dataSyncError" TEXT DEFAULT E'';
