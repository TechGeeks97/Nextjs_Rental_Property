import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const property = await Property.findById(params.id).lean();

    if (!property) {
      return new Response(JSON.stringify({ message: "Property not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.error("Error fetching property:", error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", error: error.message }),
      { status: 500 }
    );
  }
};
