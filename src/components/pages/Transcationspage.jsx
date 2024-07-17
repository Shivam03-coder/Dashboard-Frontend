import React, { useState } from "react";
import Pageheader from "../shared/header/Pageheader";
import { useGetTransactionsQuery } from "../../app/api/userapi";
import Transcationtable from "../pages-components/transactions/Transcationtable";

const Transcationspage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [search, setSearch] = useState("");

  const { data } = useGetTransactionsQuery({
    page,
    pageSize,
    search,
  });

  return (
    <div>
      <section className="scrollbar-hidden md:p-7 h-screen overflow-auto">
        <Pageheader
          title="TRANSCATIONS"
          subtitle="See your list of transcations"
        />
        <section className="pb-20">
          <Transcationtable
            Data={data?.Transactions}
            page={page}
            setPage={setPage}
            setPageSize={setPageSize}
            setSearch={setSearch}
          />
        </section>
      </section>
    </div>
  );
};

export default Transcationspage;
