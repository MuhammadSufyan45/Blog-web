import { PortableTextComponents } from '@portabletext/react';

export const components:PortableTextComponents={
    block:{
        h4:({children})=><h4 className='text-2xl font-medium'>{children}</h4>,

        h3:({children})=><h3 className='text-3xl'>{children}</h3>
    }
}