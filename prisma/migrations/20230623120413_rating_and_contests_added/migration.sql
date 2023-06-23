/*
  Warnings:

  - Added the required column `contests` to the `CodeforcesLeaderBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_contest_id` to the `CodeforcesLeaderBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `CodeforcesLeaderBoard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CodeforcesLeaderBoard" ADD COLUMN     "contests" INTEGER NOT NULL,
ADD COLUMN     "last_contest_id" INTEGER NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL;
