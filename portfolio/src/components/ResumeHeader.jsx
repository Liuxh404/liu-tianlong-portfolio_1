export default function ResumeHeader() {
  return (
    <header className="border-b border-border">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row gap-0 md:gap-0">
          <div className="w-full md:w-[38%] md:flex-shrink-0 relative">
            <img
              src="/avatar.jpg"
              alt="刘天龙"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-[62%] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-text tracking-wide">刘天龙</h1>
              <p className="mt-4 text-text-secondary text-lg">
                <span className="mr-8">30岁</span>
                <span>阜阳临泉</span>
              </p>
            </div>

            <div className="mt-6 md:mt-0 text-right text-sm text-text-secondary space-y-1">
              <p>联系电话：</p>
              <p className="font-medium text-text text-base">185 2172 8252</p>
              <p className="mt-3">E-Mail：</p>
              <p className="font-medium text-text text-base">709583782@qq.com</p>
              <p className="mt-3">毕业院校：</p>
              <p className="font-medium text-text text-base">华东师范大学 计算机专业</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
