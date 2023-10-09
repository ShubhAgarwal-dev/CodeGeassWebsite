/*
  Warnings:

  - You are about to drop the column `num_participants` on the `Codeforces` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Codeforces` table. All the data in the column will be lost.
  - You are about to drop the column `rank` on the `Leetcode` table. All the data in the column will be lost.
  - You are about to drop the column `solved` on the `Leetcode` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Codeforces" DROP COLUMN "num_participants",
DROP COLUMN "rating";

-- AlterTable
ALTER TABLE "Leetcode" DROP COLUMN "rank",
DROP COLUMN "solved";
