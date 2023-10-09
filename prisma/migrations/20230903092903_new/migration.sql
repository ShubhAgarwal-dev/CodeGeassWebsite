-- DropForeignKey
ALTER TABLE "Codeforces" DROP CONSTRAINT "Codeforces_member_id_fkey";

-- DropForeignKey
ALTER TABLE "Leetcode" DROP CONSTRAINT "Leetcode_member_id_fkey";

-- AddForeignKey
ALTER TABLE "Codeforces" ADD CONSTRAINT "Codeforces_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leetcode" ADD CONSTRAINT "Leetcode_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
