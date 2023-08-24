// Select the database to use.

use("blog");
db.users.find();
db.users.insertOne({
  name: { first: "sang", last: "Lee" },
  email: "lsy@naver.com",
  Tags: ["몽고디비수업", "점심메뉴 ?", "면 or 밥 ?"],
});

use("blog");
db.users.updateOne({ name: "sangyong" }, { $set: { password: "1234" } });

use("blog");
db.users.updateOne(
  { email: "lsy@naver.com" },
  { $set: { "name.last": "Lee변경함" } }
);

use("blog");
db.users.findOne({ "name.first": "sang" });

use("blog");
db.users.findOne({ _id: ObjectId("64e6c651459d54ad3fcb2a2b") });
