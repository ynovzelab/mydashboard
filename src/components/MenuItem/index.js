import Link from 'next/link';

const Index = ({ item }) => {
    return (
        <li>
            <Link href={item.path}>
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
            </Link>
        </li>
    )
}

export default Index;