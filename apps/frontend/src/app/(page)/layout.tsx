import Pagina from "@/components/templete/Pagina";

export default function layout(props: any) {
    return (
        <Pagina>{props.children}</Pagina>
    )
}