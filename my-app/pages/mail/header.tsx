import SearchForm from "@/components/SearchForm/SearchForm";

export default function Header() {
  const searchFormProps = {
    label: '메일검색',
    tagList: ['첨부파일 있음', '지난 7일', '보낸 메일']
  }
  return (
    <header>
      <div className="mail-header-container">
        <div className="mail-header-logo">
          <span className="icon menu medium"></span>
          <span className="icon mail large"></span>
          <span>메일</span>
        </div>
        <div className="mail-header-search">
          <SearchForm {...searchFormProps}></SearchForm>
        </div>
      </div>
    </header>
  )
}
