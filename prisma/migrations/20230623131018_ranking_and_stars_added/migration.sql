/*
  Warnings:

  - Added the required column `ranking` to the `LeetCodeLeaderBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stars` to the `LeetCodeLeaderBoard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LeetCodeLeaderBoard" ADD COLUMN     "ranking" INTEGER NOT NULL,
ADD COLUMN     "stars" INTEGER NOT NULL;
