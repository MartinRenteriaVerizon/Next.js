import { useRouter } from 'next/router';

function news() {
    const router = useRouter();
    console.log(router.query.newsid)
    return (
            <h1>This is the news page</h1>
    )
}

export default news;