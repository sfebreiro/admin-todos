import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            { description: 'Text 1 1 1 1 1', complete: true },
            { description: 'Text 2 2 2 2 2' },
            { description: 'Text 3 3 3 3 3' },
            { description: 'Text 4 4 4 4 4' },
            { description: 'Text 5 5 5 5 5' },
        ]
    })

  return NextResponse.json({
    message: 'Seed executed'
  });
}