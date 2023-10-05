-- DropForeignKey
ALTER TABLE "FOSS" DROP CONSTRAINT "FOSS_member_id_fkey";

-- DropForeignKey
ALTER TABLE "GameDev" DROP CONSTRAINT "GameDev_member_id_fkey";

-- AddForeignKey
ALTER TABLE "GameDev" ADD CONSTRAINT "GameDev_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FOSS" ADD CONSTRAINT "FOSS_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
