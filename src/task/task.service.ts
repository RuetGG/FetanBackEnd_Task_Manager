import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Status } from '@prisma/client';

interface TaskQueryOptions {
  search?: string;
  status?: 'COMPLETED' | 'ACTIVE';
  page: number;
  limit: number;
}

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getTasksForUser(userId: number, options: TaskQueryOptions) {
  const { search, status, page, limit } = options;
  const skip = (page - 1) * limit;

  let statusFilter;

  if (status === 'COMPLETED'){
     statusFilter = ['COMPLETED'];
  }
  else {
    statusFilter = ['PENDING', 'IN_PROGRESS'];
  } 

  return this.prisma.task.findMany({
    where: {
      userId,
      name: search
        ? {
            contains: search,
          }
        : undefined,
      status: {
        in: statusFilter,
      },
    },
    skip,
    take: limit,
    orderBy: {
      createdAt: 'desc',
    },
  });
}
  createTasks(userId: number, name: string) {
  return this.prisma.task.create({
    data: {
      name,
      userId,
      status: 'PENDING',
    },
  });
}

  updateStatus(userId: number, taskId: number, status: Status) {
    return this.prisma.task.updateMany({
      where: {
        id: taskId,
        userId,
      },
      data: { status },
    });
  }

  async deleteTask(userId: number, taskId: number) {
    return this.prisma.task.deleteMany({
      where: {
        id: taskId,
        userId,
      },
    });
  }
}
