import { useRouter } from 'next/router';

function details() {
    const router = useRouter();
    console.log(router.query.newsid)
    return (
            <h1>This is the details page created as a dynamic page and sibling to the news route</h1>
    )
}

export default details;