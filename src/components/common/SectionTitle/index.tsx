type Props = {
  title: string
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div
      className="py-28 bg-white text-center"
      style={{
        backgroundImage: "url('https://ibasevn.com/image/catalog/services/pagetitle.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid #f5f5f5',
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-[40px] font-semibold space tracking-[1px] text-white text-center mb-3">{title}</h1>
        <ul className="pl-0 mb-0">
          <li className="text-sm text-white font-semibold capitalize inline-block about-us-redirect">Trang chủ</li>
          <li className="text-sm text-white font-semibold capitalize inline-block">{title}</li>
        </ul>
      </div>
    </div>
  )
}
