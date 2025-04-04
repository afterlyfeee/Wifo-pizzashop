-- CreateEnum
CREATE TYPE "ProductSizes" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateTable
CREATE TABLE "Size" (
    "id" TEXT NOT NULL,
    "name" "ProductSizes" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productid" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
