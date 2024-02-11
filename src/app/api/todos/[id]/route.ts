import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import * as yup from 'yup';

interface Segments {
    params: {
        id: string;
    }
}

export async function GET(request: Request, {params}: Segments) { 

    const id = params.id;

    const todo = await prisma.todo.findFirst({  where: { id: id } });

    if (!todo) { 
        NextResponse.json({ message: 'No vale' }, { status: 404 })
    }

    return NextResponse.json(todo);                          
}



const putSchema = yup.object({
    complete: yup.boolean().optional(),
    description: yup.string().optional()
})

export async function PUT(request: Request, {params}: Segments) { 

    const id = params.id;

    const todo = await prisma.todo.findFirst({  where: { id: id } });

    if (!todo) { 
        NextResponse.json({ message: 'No vale' }, { status: 404 })
    }

    try {
        const {complete, description} = await putSchema.validate(await request.json());
    
        const updateTodo = await prisma.todo.update({
            where: { id },
            data: {complete, description}
        })
    
        return NextResponse.json(updateTodo);                          
        
    } catch (error) {
        return NextResponse.json(error, {status: 400});  
    }

}