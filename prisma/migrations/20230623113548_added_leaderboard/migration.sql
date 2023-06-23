-- CreateTable
CREATE TABLE "CodeforcesLeaderBoard" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userHandle" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CodeforcesLeaderBoard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeetCodeLeaderBoard" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userHandle" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeetCodeLeaderBoard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CodeforcesLeaderBoard_email_key" ON "CodeforcesLeaderBoard"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CodeforcesLeaderBoard_userHandle_key" ON "CodeforcesLeaderBoard"("userHandle");

-- CreateIndex
CREATE UNIQUE INDEX "LeetCodeLeaderBoard_email_key" ON "LeetCodeLeaderBoard"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LeetCodeLeaderBoard_userHandle_key" ON "LeetCodeLeaderBoard"("userHandle");
