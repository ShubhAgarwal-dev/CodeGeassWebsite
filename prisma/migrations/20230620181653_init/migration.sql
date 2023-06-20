-- CreateEnum
CREATE TYPE "Wing" AS ENUM ('FOSS', 'GAME_DEV', 'CP', 'NETWORKING', 'CYBERSECURITY');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('DEVELOPER', 'ASSET_DES', 'MUSIC_COMP', 'STORY_WRITING', 'ENV_DES');

-- CreateTable
CREATE TABLE "Members" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roll_number" INTEGER NOT NULL,
    "wing" "Wing" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Codeforces" (
    "id" SERIAL NOT NULL,
    "handle" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "num_participants" INTEGER NOT NULL,
    "member_id" TEXT NOT NULL,

    CONSTRAINT "Codeforces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leetcode" (
    "id" SERIAL NOT NULL,
    "handle" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "solved" INTEGER NOT NULL,
    "member_id" TEXT NOT NULL,

    CONSTRAINT "Leetcode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameDev" (
    "id" SERIAL NOT NULL,
    "role" "Role" NOT NULL,
    "member_id" TEXT NOT NULL,

    CONSTRAINT "GameDev_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FOSS" (
    "id" SERIAL NOT NULL,
    "github_uname" TEXT NOT NULL,
    "member_id" TEXT NOT NULL,

    CONSTRAINT "FOSS_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Members_roll_number_key" ON "Members"("roll_number");

-- CreateIndex
CREATE INDEX "Members_roll_number_idx" ON "Members"("roll_number");

-- CreateIndex
CREATE UNIQUE INDEX "Codeforces_handle_key" ON "Codeforces"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Codeforces_member_id_key" ON "Codeforces"("member_id");

-- CreateIndex
CREATE UNIQUE INDEX "Leetcode_handle_key" ON "Leetcode"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Leetcode_member_id_key" ON "Leetcode"("member_id");

-- CreateIndex
CREATE UNIQUE INDEX "GameDev_member_id_key" ON "GameDev"("member_id");

-- CreateIndex
CREATE UNIQUE INDEX "FOSS_github_uname_key" ON "FOSS"("github_uname");

-- CreateIndex
CREATE UNIQUE INDEX "FOSS_member_id_key" ON "FOSS"("member_id");

-- AddForeignKey
ALTER TABLE "Codeforces" ADD CONSTRAINT "Codeforces_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leetcode" ADD CONSTRAINT "Leetcode_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameDev" ADD CONSTRAINT "GameDev_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FOSS" ADD CONSTRAINT "FOSS_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
