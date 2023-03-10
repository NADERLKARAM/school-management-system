    //add prev
    if (startIndex > 0) {
        pagination.prev = {
          page: page - 1,
          limit,
        };
      }
  
      // //Execute query
      const teachers = await TeachersQuery.find().skip(skip).limit(limit);
  
      res.results = {
        total,
        pagination,
        results: teachers.length,
        status: "success",
        message: "Teachers fetched successfully",
        data: teachers,
      };
  
      next();
    };
  };
  
  module.exports = advancedResults;
  