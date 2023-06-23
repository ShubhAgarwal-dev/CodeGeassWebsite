/*
  Warnings:

  - You are about to drop the column `email` on the `CodeforcesLeaderBoard` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `LeetCodeLeaderBoard` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rollNumber]` on the table `CodeforcesLeaderBoard` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rollNumber]` on the table `LeetCodeLeaderBoard` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rollNumber` to the `CodeforcesLeaderBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rollNumber` to the `LeetCodeLeaderBoard` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CodeforcesLeaderBoard_email_key";

-- DropIndex
DROP INDEX "LeetCodeLeaderBoard_email_key";

-- AlterTable
ALTER TABLE "CodeforcesLeaderBoard" DROP COLUMN "email",
ADD COLUMN     "rollNumber" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "LeetCodeLeaderBoard" DROP COLUMN "email",
ADD COLUMN     "rollNumber" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CodeforcesLeaderBoard_rollNumber_key" ON "CodeforcesLeaderBoard"("rollNumber");

-- CreateIndex
CREATE INDEX "CodeforcesLeaderBoard_rollNumber_idx" ON "CodeforcesLeaderBoard"("rollNumber");

-- CreateIndex
CREATE UNIQUE INDEX "LeetCodeLeaderBoard_rollNumber_key" ON "LeetCodeLeaderBoard"("rollNumber");

-- CreateIndex
CREATE INDEX "LeetCodeLeaderBoard_rollNumber_idx" ON "LeetCodeLeaderBoard"("rollNumber");
