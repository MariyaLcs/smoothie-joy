import { useRouter } from "next/router"
import articles from '../api/articles'
export default function LearnNext ()
{
    const router = useRouter()
    const { name } = router.query
    const article = articles.find(article => article.id === name)
    return (<h1>Get tips on how to make { article?.id }</h1>)
}
