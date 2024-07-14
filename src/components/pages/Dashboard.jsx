import React from "react";
import { useGetProductsQuery } from "../../app/api/userapi";

const Dashboard = () => {
  const { data } = useGetProductsQuery();
  console.log("🚀 ~ Dashboard ~ data:", data)

  return (
    <div>
      <h1 className="text-2xl scrollbar-hidden p-7 h-screen overflow-y-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil consectetur beatae mollitia, nostrum esse deserunt incidunt eius blanditiis eos sed consequatur repellendus ea nobis non? Eveniet, quod dignissimos tempore sapiente inventore nihil. Soluta iusto alias ipsa. Non ducimus mollitia, explicabo perferendis harum nemo soluta pariatur quibusdam ipsam doloribus qui architecto, asperiores officiis perspiciatis, ipsum assumenda eaque quae voluptatum laborum distinctio iusto iste aspernatur quasi adipisci. Dignissimos possimus alias, id similique et quasi beatae? Exercitationem quam, ad alias rem dicta iure velit sint doloremque voluptates veniam sunt eos adipisci ea minus ut dolore quidem, laboriosam officiis, distinctio nemo dolor ipsum unde assumenda temporibus. Aliquam nobis commodi quos reiciendis sapiente adipisci natus. Voluptate atque fugit nemo illum veniam dolores in enim numquam iusto quaerat, dignissimos eos ipsam ducimus dicta architecto animi, saepe quae omnis similique neque suscipit facere. Debitis odio enim labore, itaque rerum non incidunt. Dolores praesentium dolorum error quos magnam beatae nam sed, dolor corporis possimus accusantium ipsum iure earum repudiandae et eligendi nihil sapiente itaque perspiciatis temporibus dolorem nisi aliquam vel! Earum ipsa quidem iusto nesciunt illum incidunt dolore maiores cum ipsum in, facere ad rem, quod asperiores quibusdam, ab cumque molestiae praesentium eius numquam sint tempora pariatur molestias.
      </h1>
    </div>
  );
};

export default Dashboard;
