export default function Comment({text}: {text: string;}) {
    return <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />
}