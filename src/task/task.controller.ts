import { Controller, Get, Post, Param, Body, Patch, Delete, Query, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { User, Status } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CreateTaskDto } from './dto/create-new-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@UseGuards(JwtGuard)
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTasks(@GetUser() user: User, @Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTasks(user.id, createTaskDto.name);
  }

  @Get()
getTasks(
  @GetUser() user: User,
  @Query('search') search?: string,
  @Query('status') status?: 'COMPLETED' | 'ACTIVE',
  @Query('page') page = '1',
  @Query('limit') limit = '3',
) {
  return this.taskService.getTasksForUser(user.id, {
    search,
    status,
    page: Number(page),
    limit: Number(limit),
  });
}

  @Patch(':id')
  updateTaskStatus(
    @GetUser() user: User,
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskDto,
  ) {
    return this.taskService.updateStatus(user.id, Number(id), updateTaskStatusDto.status);
  }

  @Delete(':id')
  deleteTask(@GetUser() user: User, @Param('id') id: string) {
    return this.taskService.deleteTask(user.id, Number(id));
  }
}