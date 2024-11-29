-- CreateTable
CREATE TABLE `course` (
    `couse_name` VARCHAR(255) NOT NULL,
    `duration` VARCHAR(255) NOT NULL,
    `fee` VARCHAR(255) NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teacher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teacher_name` VARCHAR(191) NOT NULL,
    `teacher_surname` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
