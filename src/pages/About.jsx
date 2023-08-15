import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";

const  About = () => {
  return (
    <Layout>
      <Box sx={{my:15, 
                textAlign:'center', 
                p: 2,
            "& h4": {
              fontWeight:'bold',
              my:2,
              fontSize:"2rem"
            },
            "& p":{
              textAlign:"justify"
            },
            "@media (max-width: 600px)":{
                mt:0,
                "& h4":{
                  fontSize:"1.5rem"
                }
            }
    }}>
        <Typography variant="h4">
          Welcome To My Resturant
        </Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius consequatur quisquam quo minima fugit, illum ratione suscipit vitae, nam, accusamus deleniti. Perferendis eaque autem veritatis aspernatur aperiam eum quisquam? Ea quasi delectus quod distinctio temporibus sapiente quas totam dignissimos, assumenda animi corrupti optio consectetur. Nulla maiores, blanditiis accusantium dicta nemo velit mollitia. Repellendus, eaque suscipit? Provident tenetur doloremque consectetur eos sint necessitatibus natus? Error architecto fugit ipsam suscipit pariatur, libero delectus velit illo! Laboriosam, corrupti nobis excepturi maiores mollitia quas unde eum, tempore culpa sed facere provident quasi aut, at minima officia dolores quibusdam deserunt error quidem. Minima, necessitatibus modi?
        </p>
        <br/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quis corporis nulla iste vel aut, consequatur laborum pariatur omnis similique ad. Accusantium adipisci incidunt labore ea delectus harum repellat natus voluptate similique saepe eos maiores vero sint, repellendus amet dignissimos ab libero hic quod aperiam accusamus totam consequuntur? Necessitatibus quisquam dolor dolorem aspernatur sint saepe laudantium dicta voluptate neque obcaecati fuga dolorum nihil itaque eius voluptatem, quam minima sed accusamus voluptates voluptas. Atque itaque provident labore, aspernatur quisquam beatae facilis dolores nihil soluta accusantium iusto officiis molestias ut quas corporis voluptas quidem? Non, iste? Dolorum ut dolores eveniet pariatur quis.</p>
      </Box>

    </Layout>
  );
};

export default About;
