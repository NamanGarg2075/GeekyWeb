---
title: RecyclerView in Kotlin
description: Learn how to implement the RecyclerView component in Kotlin for seamless and optimized list display in Android development. The RecyclerView is a powerful and flexible tool that enables efficient handling of large data sets, improving performance and user experience. Discover essential techniques and best practices to create responsive and interactive lists, including item view recycling, view holders, and data binding. This comprehensive guide provides step-by-step instructions, code examples, and insights to help you leverage the RecyclerView to its full potential and enhance your Android applications
# image: "#"
keywords:
  [
    RecyclerView,
    Kotlin,
    Android development,
    list display,
    efficient handling,
    large data sets,
    performance optimization,
    user experience,
    item view recycling,
    view holders,
    data binding,
    responsive lists,
    interactive lists,
    code examples,
    Android applications,
  ]
sidebar_position: 31
sidebar_label: RecyclerView
slug: /kotlin/recyclerview
---

I just want to share my little bit knowledge and code of RecyclerView using Kotlin.

## Main class and Adapter

I am assuming that you have aware about the some syntax of **Kotlin** and how to use, just add **RecyclerView** in **activity_main.xml** file and set with adapter class.

```kotlin
class MainActivity : AppCompatActivity(){

        lateinit var mRecyclerView : RecyclerView
        val mAdapter : RecyclerAdapter = RecyclerAdapter()

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.activity_main)
            val toolbar = findViewById(R.id.toolbar) as Toolbar
            setSupportActionBar(toolbar)

            mRecyclerView = findViewById(R.id.recycler_view) as RecyclerView

            mRecyclerView.setHasFixedSize(true)
            mRecyclerView.layoutManager = LinearLayoutManager(this)
            mAdapter.RecyclerAdapter(getList(), this)
            mRecyclerView.adapter = mAdapter
        }

        private fun getList(): ArrayList<String> {
            var list : ArrayList<String> = ArrayList()
            for  (i in 1..10) { // equivalent of 1 <= i && i <= 10
                println(i)
                list.add("$i")
            }
            return list
        }
    }
```

this one is your recycler view **adapter** class and create **main_item.xml** file what you want

```kotlin
class RecyclerAdapter : RecyclerView.Adapter<RecyclerAdapter.ViewHolder>() {

    var mItems: ArrayList<String>  = ArrayList()
    lateinit var mClick : OnClick

    fun RecyclerAdapter(item : ArrayList<String>, mClick : OnClick){
        this.mItems = item
        this.mClick = mClick;
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = mItems[position]
        holder.bind(item, mClick, position)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        return ViewHolder(layoutInflater.inflate(R.layout.main_item, parent, false))
    }

    override fun getItemCount(): Int {
        return mItems.size
    }

    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val card = view.findViewById(R.id.card) as TextView
        fun bind(str: String, mClick: OnClick, position: Int){
            card.text = str
            card.setOnClickListener { view ->
                mClick.onClickListner(position)
            }
        }
    }
}
```
