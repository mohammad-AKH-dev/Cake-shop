import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type paginationPropsType = {
    postsPerPage: number
    length: number
    currentPage?: number
    href: string
}

    const Pagination = (props: paginationPropsType) => {
        const {postsPerPage, length, currentPage , href} = props
        const router = useRouter()
        const paginationNumbers = [];

        for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
            paginationNumbers.push(i);
        }

        return (
            <div className="pagination flex items-center justify-center mt-12 gap-x-3 flex-wrap">
            {paginationNumbers.map((item:number, index:number) => (
              <Link
                className={`py-[5px] px-4 rounded-md ${
                  index + 1 === currentPage && "bg-primary text-white"
                } hover:bg-primary
                 text-title text-[18px] transition-all hover:text-white`}
                href={`/${href}/${index + 1}`}
              >
                {index + 1}
              </Link>
            ))}
          </div>
        );
    };
    export default Pagination;